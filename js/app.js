$(function() {
  var db = new loki('blog');
  var articles = db.addCollection('articles', { indices: ['no'] });

  articles.insert({ no: 1, title: '포스팅 1', contents: '블라 블라 블라', timestamp: new Date('2015-01-23') });
  articles.insert({ no: 2, title: '포스팅 2', contents: '블라 블라 블라', timestamp: new Date('2015-02-12') });
  articles.insert({ no: 3, title: '포스팅 3', contents: '블라 블라 블라', timestamp: new Date('2015-03-02') });
  articles.insert({ no: 4, title: '포스팅 4', contents: '블라 블라 블라', timestamp: new Date('2015-02-27') });
  articles.insert({ no: 5, title: '포스팅 5', contents: '블라 블라 블라', timestamp: new Date('2015-05-11') });

  var data = articles.chain()
                .find({ no: { $gt: 0 }})
                .simplesort("timestamp")
                .data();
  console.log(data);
});
