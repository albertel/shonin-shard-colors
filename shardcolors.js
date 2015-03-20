// First level is the shard number, second level is th jump number.
// 'jump' -> Shard Jumped on it's own no link.

var jumpColors = {
    // See jumps here: https://docs.google.com/spreadsheets/d/1gqFkXJnfYJOeEIO9IP_S_bfSqch8bfh_xx_zZn9y6rk/edit#gid=51721181
    1: {
	1: 'enl',
	3: 'res',
	4: 'res',
	5: 'enl',
	6: 'enl',
	7: 'enl',
	8: 'enl',
	9: 'enl',
	10: 'enl',
	11: 'enl',
	12: 'enl',
	13: 'enl',
	14: 'enl',
	15: 'enl',
	16: 'enl',
	17: 'enl',
	18: 'enl',
	19: 'jump',
	23: 'enl',
	29: 'res',
    },
    2: {
	16: 'jump',
    },
    3: {
	49: 'enl',
    },
    5: {
	33: 'jump',
    },
    // See jumps here: https://docs.google.com/spreadsheets/d/1gqFkXJnfYJOeEIO9IP_S_bfSqch8bfh_xx_zZn9y6rk/edit#gid=2041471328
    6: {
	1: 'jump',
	2: 'enl',
	3: 'enl',
	4: 'enl',
	5: 'enl',
	6: 'enl',
	7: 'enl',
	8: 'enl',
	9: 'enl',
	10: 'enl',
	11: 'enl',
	12: 'enl',
	13: 'enl',
	14: 'enl',
	15: 'enl',
	16: 'enl',
	17: 'enl',
	18: 'enl',
	19: 'enl',
	20: 'res',
	21: 'enl',
	22: 'enl',
	23: 'enl',
	24: 'enl',
	25: 'enl',
    },
    7: {
	40: 'enl',
    },
    9: {
	38: 'enl',
    },
    10: {
	25: 'res',
    },
    12: {
	26: 'res',
    },
    17: {
	32: 'enl',
    },
    18: {
	24: 'res',
    },
    20: {
	9: 'res',
	11: 'res',
	10: 'res',
	12: 'res',
	13: 'res',
	14: 'res',
	15: 'res',
	16: 'res',
	17: 'res',
	18: 'res',
	19: 'res',
	20: 'res',
	21: 'res',
	23: 'enl',
	24: 'enl',
	28: 'jump',
    },
    21: {
	36: 'enl',
    },
    // See jumps here: https://docs.google.com/spreadsheets/d/1gqFkXJnfYJOeEIO9IP_S_bfSqch8bfh_xx_zZn9y6rk/edit#gid=1403831521
    // Jump# is row# - 2
    22: {
	19: 'res', // -> NASA Water Tower
	20: 'enl',
	21: 'enl',
	22: 'enl',
	23: 'jump',
	24: 'enl',
	25: 'enl',
	26: 'enl',
	27: 'res',
	28: 'res',
	29: 'res',
	30: 'res',
    },
    24: {
	24: 'enl',
    },
    25: {
	49: 'res',
    },
    26: {
	36: 'enl',
    },
    29: {
	25: 'enl',
    },
    31: {
	43: 'res',
    },
};