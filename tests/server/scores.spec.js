/**
 * Created by mr47 on 6/12/2017.
 */

import { calculateScore } from './../../server/utils/calculateScore';

// score section
let sections = [
    'confidence-mixed',
    'confidence-perspective',
    'confidence-relationship',
    'confidence-system',
    'confidence-distinction',
    'skill-mixed',
    'skill-perspective',
    'skill-relationship',
    'skill-system',
    'skill-distinction'
];

// questions additional data removed
let questions = [
    {
        "id": 1,
        "type":"single_choice",
        "qid":1,
        "section_score": "skill-mixed",
        "answers":[
            {
                "id":1,
                "question_id": 1,
                "points": 3,
            },
            {
                "id":2,
                "question_id": 1,
                "points": 4,
            }
        ]
    },
    {
        "id": 2,
        "type":"single_choice",
        "qid":2,
        "section_score": "skill-mixed",
        "answers":[
            {
                "id":3,
                "points": 4,
            },
            {
                "id":4,
                "points": 5,
            }
        ]
    }
];
// default answer map, pagination don't need because we are flattening answerMap
let answerMap = {
    0: ["1", "4"]
};

describe('Score calculation', () => {
    let score = {};

    describe('Score initial values validation', ()=> {
         before(() => {
             score = calculateScore(answerMap, questions, true);
         });

         it('Should get an aggregate skill only', () => {
            expect(score).to.include({
                'aggregate-skill': '0.8889'
            })
        });
        it('Should get an initial aggregate confidence', () => {
            expect(score).to.include({
                'aggregate-confidence': '0.000'
            })
        });
    });

    describe('Score validation', ()=> {

        before(() => {
            // setup additional question
            // one question will not have an score section
            for (let i = 0; i < 20; i++) {
                // it's predictable data generation
                const index = Math.ceil((i/20)*10);
                let pointsOne = i % 2 ? 5 : 10;
                let pointsTwo = i % 2 ? 10 : 5;
                let newQuestion = {
                    "id": i + 3,
                    "type": "single_choice",
                    "qid": i + 3,
                    "section_score": sections[index],
                    "answers":[
                        {
                            "id": i + 5,
                            "points": pointsOne,
                        },
                        {
                            "id": i + 5,
                            "points": pointsTwo,
                        }
                    ]
                };
                let answerId = i % 2 ? newQuestion.answers[0].id : newQuestion.answers[1].id;
                questions.push(newQuestion);
                answerMap['0'].push(answerId.toString());
            }
            score = calculateScore(answerMap, questions, true);
        });

        it('Should get an aggregate skill', () => {
            expect(score).to.include({
                'aggregate-skill': '0.7615'
            })
        });
        it('Should get an aggregate confidence', () => {
            expect(score).to.include({
                'aggregate-confidence': '0.7778'
            })
        });
        it('Should calculate confidence distinction', () => {
            expect(score).to.include({
                'confidence-distinction': '0.7500'
            })
        });
        it('Should calculate confidence mixed', () => {
            expect(score).to.include({
                'confidence-mixed': '1.000'
            })
        });
        it('Should calculate confidence perspective', () => {
            expect(score).to.include({
                'confidence-perspective': '0.7500'
            })
        });
        it('Should calculate confidence relationship', () => {
            expect(score).to.include({
                'confidence-relationship': '0.7500'
            })
        });
        it('Should calculate confidence system', () => {
            expect(score).to.include({
                'confidence-system': '0.7500'
            })
        });
        it('Should calculate skill distinction', () => {
            expect(score).to.include({
                'skill-distinction': '0.7500'
            })
        });
        it('Should calculate skill mixed', () => {
            expect(score).to.include({
                'skill-mixed': '0.7931'
            })
        });
        it('Should calculate skill perspective', () => {
            expect(score).to.include({
                'skill-perspective': '0.7500'
            })
        });
        it('Should calculate skill relationship', () => {
            expect(score).to.include({
                'skill-relationship': '0.7500'
            })
        });
        it('Should calculate skill relationship', () => {
            expect(score).to.include({
                'skill-system': '0.7500'
            })
        });
        it('Should exclude scores question without score section', () => {
            expect(score).to.include({
                'undefined': '0.5000'
            })
        });
    });

    describe('Score function limits', ()=> {
        let _score = {};
        let _answerMap = {
            0: ["2"],
            1: ["3"]
        };
        let _questions = [
            {
                "id": 1,
                "type":"single_choice",
                "qid":1,
                "answers":[
                    {
                        "id":1,
                        "question_id":1,
                        "points": 3,
                    },
                    {
                        "id":2,
                        "question_id":1,
                        "points": 4,
                    }
                ]
            },
            {
                "id": 2,
                "type":"single_choice",
                "qid":2,
                "answers":[
                    {
                        "id":3,
                        "points": 4,
                    },
                    {
                        "id":4,
                        "points": 5,
                    }
                ]
            }
        ];
        before(() => {
            _score = calculateScore(_answerMap, _questions, true);
        });

        it('Should calculate questions without section', () => {
            expect(_score).to.include({
                'undefined': '0.8889',
                'aggregate-skill': '0.000',
                'aggregate-confidence': '0.000'
            });
        });

        it('Should not calculate question (invalid: question, answer)', () => {
            _questions.push({
                'invalid': undefined
            });
            _answerMap['1'].push('-1');
            _score = calculateScore(_answerMap, _questions, true);
            expect(_score).to.deep.equal({
                'undefined': '0.8889',
                'aggregate-skill': '0.000',
                'aggregate-confidence': '0.000'
            });
            delete _questions[_questions.length - 1];
            delete _answerMap['1'][_answerMap['1'].length - 1];
        });

        it('Should not calculate text question', () => {
            _questions.push({
                "id": 2,
                "type": "open_ended",
                "qid": 2,
                "answers":[
                    {
                        "id": 100,
                        "points": 4,
                    },
                    {
                        "id": 99,
                        "points": 5,
                    }
                ]
            });
            _answerMap['1'].push('99');
            _score = calculateScore(_answerMap, _questions, true);
            expect(_score).to.deep.equal({
                'undefined': '0.8889',
                'aggregate-skill': '0.000',
                'aggregate-confidence': '0.000'
            });
            delete _questions[_questions.length - 1];
            delete _answerMap['1'][_answerMap['1'].length - 1];
        });

        it('Should not calculate empty values, only base aggregate', () => {
            _questions = [];
            _answerMap = {};
            _score = calculateScore(_answerMap, _questions, true);
            expect(_score).to.deep.equal({
                'aggregate-skill': '0.000',
                'aggregate-confidence': '0.000'
            });
        });
    })

});
