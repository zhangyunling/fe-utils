module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always', [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'workflow',
                'chore',
                'revert',
                'delete',
                'merge'
            ]
        ],
        'subject-case': [0, 'never', ['lower-case']]
    }
}
