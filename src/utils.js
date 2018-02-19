/**
 * Created by mr47 on 5/29/2017.
 */

export const canUseDOM = () => !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
);
