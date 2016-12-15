'use strict';

// After page is loaded
$(function () {
  let articles    = [],
      currArticle = 0;

  // Get 10 articles
  $.get('/articles').done(data => {
    articles = data;
  });
  
  function updateArticleAndComments () {
    const id = articles[currArticle]._id;

    $.get(`/comments/${id}`).done(data => {
      $('#title').text(articles[currArticle].title);
      $('#summary').text(articles[currArticle].summary);
      $('#link').attr('href', articles[currArticle].link);
      $('#comments').html(data.map(e => `${e.comment}<br/>`).join(''));
    });
  }

  // Show next article
  $('#next_article').click(e => {
    if (currArticle + 1 < articles.length) {
      currArticle++;
      updateArticleAndComments();
    }
  })

  // Show prev article
  $('#prev_article').click(e => {
    if (currArticle > 0) {
      currArticle--;
      updateArticleAndComments();
    }
  })

  // Add comment to current article
  $('#add_comment').click(e => {
    const comment = $('#new_comment').val().trim(),
          id      = articles[currArticle]._id;

    $.post('/', {comment: comment, id: id}, data => {
      $('#comments').append(`${data.comment}<br/>`);
      $('#new_comment').val('');
    })
  })

  $('#new_comment').keypress(function (e) {
    if (e.which == 13) $('#add_comment').click();
  });


  // Delete all comments for current article
  $('#delete_comments').click(e => {
    $.ajax({
      method: 'DELETE',
      data: { id: articles[currArticle]._id }
    }).then(data =>
      $('#comments').empty()
    )
  })
});