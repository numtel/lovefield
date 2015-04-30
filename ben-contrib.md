lf.DiffCalculator.prototype.applyDiff changed to only call
longestCommonSubsequence once

Observe time before:

ben@x131e:~/node/lovefield/examples$ node node.js 
Observe change 1001: 4355ms
{ rss: 74366976, heapTotal: 59726592, heapUsed: 30583432 }
added! 1001 { id: 1001,
  description: 'bygaeblhgwhsgbhobvbp',
  deadline: Wed Apr 29 2015 23:07:03 GMT-0700 (PDT),
  done: true }
Observe change 1002: 3862ms
{ rss: 90746880, heapTotal: 76237568, heapUsed: 49598376 }
added! 1002 { id: 1002,
  description: 'feehnjygfdljkhiffjnh',
  deadline: Wed Apr 29 2015 23:07:08 GMT-0700 (PDT),
  done: true }
Observe change 1003: 3755ms
{ rss: 110555136, heapTotal: 95844352, heapUsed: 70153288 }
added! 1003 { id: 1003,
  description: 'fldrbevbfjnewilhccle',
  deadline: Wed Apr 29 2015 23:07:11 GMT-0700 (PDT),
  done: true }
Observe change 1004: 3864ms
{ rss: 71819264, heapTotal: 56630784, heapUsed: 28159048 }
added! 1004 { id: 1004,
  description: 'gdizcwgzeefyfwhcioej',
  deadline: Wed Apr 29 2015 23:07:15 GMT-0700 (PDT),
  done: true }
Observe change 1005: 3942ms
{ rss: 82661376, heapTotal: 67982080, heapUsed: 20139424 }
added! 1005 { id: 1005,
  description: 'fuiggbjjbwhsdoidbies',
  deadline: Wed Apr 29 2015 23:07:19 GMT-0700 (PDT),
  done: true }
Observe change 1006: 3773ms
{ rss: 91037696, heapTotal: 76237568, heapUsed: 47184976 }
added! 1006 { id: 1006,
  description: 'flifbjcguguefcjgwfge',
  deadline: Wed Apr 29 2015 23:07:23 GMT-0700 (PDT),
  done: true }
Observe change 1007: 3952ms
{ rss: 111255552, heapTotal: 95844352, heapUsed: 60246272 }
added! 1007 { id: 1007,
  description: 'fvgkczffdslbcbviwftc',
  deadline: Wed Apr 29 2015 23:07:27 GMT-0700 (PDT),
  done: true }

Observe time after:

ben@x131e:~/node/lovefield/examples$ node node.js 
Observe change 1001: 2195ms
{ rss: 70610944, heapTotal: 56630784, heapUsed: 29590256 }
added! 1001 { id: 1001,
  description: 'bmdtcgjlifemiddkbosc',
  deadline: Wed Apr 29 2015 23:30:41 GMT-0700 (PDT),
  done: true }
Observe change 1002: 2369ms
{ rss: 72691712, heapTotal: 57662720, heapUsed: 33029144 }
added! 1002 { id: 1002,
  description: 'eabkhnjrhkgccvfcjmds',
  deadline: Wed Apr 29 2015 23:30:43 GMT-0700 (PDT),
  done: true }
Observe change 1003: 2183ms
{ rss: 80797696, heapTotal: 65918208, heapUsed: 44112552 }
added! 1003 { id: 1003,
  description: 'gredocpiiblilhzdhiir',
  deadline: Wed Apr 29 2015 23:30:46 GMT-0700 (PDT),
  done: true }
Observe change 1004: 2195ms
{ rss: 91070464, heapTotal: 76237568, heapUsed: 39965144 }
added! 1004 { id: 1004,
  description: 'ikbfiaipgdbaeohoeciy',
  deadline: Wed Apr 29 2015 23:30:48 GMT-0700 (PDT),
  done: true }
Observe change 1005: 2177ms
{ rss: 101294080, heapTotal: 86556928, heapUsed: 52856368 }
added! 1005 { id: 1005,
  description: 'fybcejcbibhtjfddiqhv',
  deadline: Wed Apr 29 2015 23:30:50 GMT-0700 (PDT),
  done: true }
Observe change 1006: 2173ms
{ rss: 111292416, heapTotal: 95844352, heapUsed: 66649824 }
added! 1006 { id: 1006,
  description: 'dmehfsfgeshcebcghjio',
  deadline: Wed Apr 29 2015 23:30:52 GMT-0700 (PDT),
  done: true }

