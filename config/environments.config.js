// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
module.exports = {
    // ======================================================
    // Overrides when NODE_ENV === 'development'
    // ======================================================
    development : (config) => ({
        compiler_public_path : `http://${config.server_host_name}:${config.server_port}/`,
        googleAuth: {
            clientID: '',
        },
        adminEmails: [
            'kaidash.anyforsoft@gmail.com'
        ]
    }),

    // ======================================================
    // Overrides when NODE_ENV === 'staging'
    // ======================================================
    staging: (config) => ({
        compiler_public_path     : '/',
        compiler_fail_on_warning : false,
        compiler_hash_type       : 'hash',
        compiler_devtool         : false,
        compiler_stats           : {
            chunks       : true,
            chunkModules : true,
            colors       : true
        },
        googleAuth: {
            clientID: '',
            clientSecret: '',
            callbackURL: ''
        },
        server_host_name: '',
        server_port: 8081,
        adminEmails: []
    }),
    production : (config) => ({
        compiler_public_path     : '/',
        compiler_fail_on_warning : false,
        compiler_hash_type       : 'hash',
        compiler_devtool         : false,
        compiler_stats           : {
            chunks       : true,
            chunkModules : true,
            colors       : true
        },
        googleAuth: {
            clientID: '',
            clientSecret: '',
            callbackURL: ''
        },
        server_host_name: '',
        server_port: 8081,

        adminEmails: [

        ]
    })
};
