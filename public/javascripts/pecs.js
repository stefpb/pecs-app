var pool = {
    'Persons' : {
        'items' : ['I', 'You', 'We', "He", "She", "It" ]
    },
    'Tasks' : {
        'passive':{
            'items' : ['watch', 'listen']
        },
        'items' : ['look', 'take', 'order', 'eat', 'use', 'ask', 'sell']
    },
    'Locations': {
        'items' : ['Home'],
        'regional' : {
            'items' : ['school', 'restaurant', 'phone', 'library', 'hospital', 'trampoline']
        },
        'germany': {
            'items': ['Paderborn', "Berlin", "Holon", "Braunschweig", "Kiel", "Düsseldorf"]
        },
        'Israel': {
            'items': ['Tel Aviv']
        }
    },
    'adjectives': {
        'sizes': {
            'items' : ['big', 'small']
        },
        'volume': {
            'items' : ['loud', 'quiet', 'silent']
        },
        'items' : ['fast', 'slow', 'next', 'last', 'first']
    },
    'Colors' : {
        'items': ['white', 'red', 'yellow', 'black', 'brown', 'blue', 'green', 'orange', 'purple', 'gray']
    },
    'Foods & Drinks':{
        'hot food':{
            'items':[ 'pizza', 'spaghetti', 'potato' ]
        },
        'cold drinks': {
            'items': ['cola', 'juice']
        },
        'hot drinks': {
            'items': ['coffee', 'tea']
        }
    },
    'Objects':{
        'technical':{
            'items':[ 'toaster', 'computer', 'dryer' ]
        },
        'items':[ 'thing' ]
    },
    items: ['can', 'need', 'please', 'thanks']
};



var selectedPath;
var sentence = [];

function resetPool() {
    selectedPath = [];
    showPool();
}

function showPool() {
    var selector = selectedPath;
    var subPool = pool;
    $('#pool').html('');
    for(var i = 0; i<selector.length; i++)
    {
        subPool = subPool[selector[i]];
    }

    $.each(subPool, function(i) {
        if(i !== 'items') {
            $('<div class="category">' + i + '</div>').appendTo('#pool');
        }
    });

    if(subPool.items) {
        $.each(subPool.items, function() {
            $('<div class="item">' + this + '</div>').appendTo('#pool');
        });
    }
}

function showSentence() {
    $('#sentence').html('');
    $.each(sentence, function() {
        $('<div class="word">' + this + '</div>').appendTo('#sentence');
    });
    $('<div class="add">+</div>').appendTo('#sentence').on('click', function() {
        selectedPath = [];
        showPool();
        capturePhoto();
    });
}


$(function() {

    showSentence();

    $('#pool .category').live('click', function() {
        selectedPath.push($(this).text());
        showPool();
    });

    $('#pool .item').live('click', function() {
        sentence.push($(this).text());
        showSentence();
        resetPool();
    });

    resetPool();

    $('#sentence .word').live('click', function() {
        sentence.splice($(this).index(), 1);
        showSentence();
    });
});