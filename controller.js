/**
 * Nama  : Moch Deden
 * Kelas : A2
 * Npm   : 41155050140062
 */
 "use strict";
 $(document).ready(function () {
  var abstractDoubleLinkedList = new DoubleLinkedList();

  $('#untilFoundInput').hide();

  $('#selectedDoubleLinkedList').click(function() {
    if ($('#selectedDoubleLinkedList').val() == 'CircularDoubleLinkedList') {
      $('#itemsList').remove();
      $('.deleting-item').remove();
      $('title').text('Circular Double Linked List');
      $('#doubleLinkedListKind').text('Circular Double Linked List');
      $('#untilFoundInput').fadeIn();
      abstractDoubleLinkedList = new CircularDoubleLinkedList();
    } else { 
      $('.deleting-item').remove();
      $('.inserting-item').after('<div class="form-inline deleting-item">' 
        + '<div class="form-group">'
        + '<input type="number" class="form-control" id="itemDeletingInput"' 
        + 'placeholder="item"></div>'
        + '<button class="btn btn-danger" id="deletingButton">delete post</button>'
        +  '</div>');
      $('title').text('Double Linked List');
      $('#doubleLinkedListKind').text('Double Linked List');
      $('#untilFoundInput').fadeOut();
      abstractDoubleLinkedList = new DoubleLinkedList();
    }
  });

  $('#insertingButton').click(function() {
    abstractDoubleLinkedList.insertAfter(
      $('#pivotInsertingInput').val(),
      $('#itemInsertingInput').val());
  });

  $('#deletingButton').click(function() {
    abstractDoubleLinkedList.deletePost($('#itemDeletingInput').val());
  });

  $('#displayingItemsButton').click(function() {
    $('#itemsList').remove();
    $('#itemsDisplay').append(' <ul class="list-inline" id="itemsList"></ul>');

    var displayer;
    if (abstractDoubleLinkedList instanceof CircularDoubleLinkedList) {
      const untilFoundValue = $('#untilFoundInput').val();
      if (untilFoundValue === '') {
        displayer = function(item) {
          console.log(item);
        };
      } else {
        abstractDoubleLinkedList.displayUntilFound(untilFoundValue, function(item) {
          $('#itemsList').append('<li class="items-list">' + item + '</li>');
        });
        return;
      }
    } else {
      displayer = function(item) {
        $('#itemsList').append('<li class="items-list">' + item + '</li>');
      };
    }
    abstractDoubleLinkedList.displayAll(displayer);
  });
});