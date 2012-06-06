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
    
    $('#pool .item').hammer({prevent_default: false}).bind('hold', function(ev) {
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(function(imageData) {
                imageData = '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';
                $(this).html('<img src="data:image/jpeg;base64,' + imageData + '" />');
                alert(imageData);
            }, function(msg) {
                alert(msg);
            }, {
              quality: 50,
              destinationType: destinationType.DATA_URL
            });
    });
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