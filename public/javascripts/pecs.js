var pool = {
    'Foods & Drinks':{
        'hot food':{
            'items':[ 'pizza' ]
        }
    },
    'Objects':{
        'technical':{
            'items':[ 'toaster' ]
        },
        'items':[ 'thing' ]
    }
};



var selectedPath;
var sentence = ['Can I'];

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
        console.log("huhu");
        sentence.splice($(this).index(), 1);
        showSentence();
    });
});