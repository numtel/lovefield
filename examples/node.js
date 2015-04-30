var randomString = require('random-strings');
var _ = require('lodash');
var lf = require('./lovefield.min.node').lf;

var schemaBuilder = lf.schema.create('todo', 1);

var INIT_ROWS = 1000;

schemaBuilder.createTable('Item').
    addColumn('id', lf.Type.INTEGER).
    addColumn('description', lf.Type.STRING).
    addColumn('deadline', lf.Type.DATE_TIME).
    addColumn('done', lf.Type.BOOLEAN).
    addPrimaryKey(['id']).
    addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC);

var todoDb;
var item;
schemaBuilder.connect({
  storeType: lf.schema.DataStoreType.MEMORY
}).then(function(db) {
  todoDb = db;
  item = db.getSchema().table('Item');

  watchInserts();

  var rows = _.range(INIT_ROWS).map(function(index) {
    return item.createRow({
      'id': index + 1,
      'description': 'Get a cup of coffee',
      'deadline': new Date(),
      'done': false
    })
  });

  return db.insertOrReplace().into(item).values(rows).exec();
// }).then(function() {
//   return todoDb.select(item.description, item.deadline).from(item).where(item.done.eq(false)).exec();
// }).then(function(results) {
//   results.forEach(function(row) {
//     console.log(row['description'], 'before',  row['deadline']);
//   });
});

function watchInserts() {
  var curLength = INIT_ROWS;
  var xq = todoDb.select().from(item)
  todoDb.observe(xq, function(changes) {
    if(changes.length === 1 && changes[0].addedCount === 1) {
      try {
        console.timeEnd('Observe change ' + (changes[0].index + 1));
      } catch (err) {}
      console.log(process.memoryUsage());
      console.log('added!', changes[0].object.length, changes[0].object[changes[0].index])
    } else {
//       console.log('changed!', changes)
    }
  })

  setInterval(function() {
    newrow = item.createRow({
      id: ++curLength,
      description: randomString.alphaLower(20),
      deadline: new Date(),
      done: true
    })
    console.time('Observe change ' + curLength);
    todoDb.insert().into(item).values([newrow]).exec();
//     if(curLength % 100 === 0) {
//       todoDb.delete().from(item).where(item.id.gt(1)).exec();
//     }
  }, 1000);
}
