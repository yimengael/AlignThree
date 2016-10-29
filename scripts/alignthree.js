/*
**###### Initialization of the game
**/
//Init the gameArray when starting to play
//Computer will have the number 1
//Player will have the number : 2

function hexc(colorval) {
    var color = '';
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    return color;
}


function generate_color(nb) {
    var red_color = "#ff0000";
    var blue_color = "#0000ff";
    if (nb === 1) {
        return red_color;
    } else
    if (nb === 2) {
        return blue_color;
    }
}

function checkAlignment3(arr2Dim, val) {
    return (((arr2Dim[0][0] === val && arr2Dim[0][1] === val && arr2Dim[0][2] === val))
            || ((arr2Dim[1][0] === val && arr2Dim[1][1] === val && arr2Dim[1][2] === val))
            || ((arr2Dim[2][0] === val && arr2Dim[2][1] === val && arr2Dim[2][2] === val)));
}


function getTheDivKnowingIandJ(i, j) {
    var div = '';
    if (i === 0 && j === 0) div = 'cell-2-0';
    if (i === 0 && j === 1) div = 'cell-2-1';
    if (i === 0 && j === 2) div = 'cell-2-2';
    if (i === 1 && j === 0) div = 'cell-1-0';
    if (i === 1 && j === 1) div = 'cell-1-1';
    if (i === 1 && j === 2) div = 'cell-1-2';
    if (i === 2 && j === 0) div = 'cell-0-0';
    if (i === 2 && j === 1) div = 'cell-0-1';
    if (i === 2 && j === 2) div = 'cell-0-2';
    return div;
}

function getTheThirdFreeCell(arr2Dim, val) {
    var div = [];

    if ( arr2Dim[0][0] === val && arr2Dim[0][1] === val && arr2Dim[0][2] === 0 ) {
        div.push(0); div.push(2);
    }
    if ( arr2Dim[0][1] === val && arr2Dim[0][2] === val && arr2Dim[0][0] === 0 ) {
        div.push(0); div.push(0);
    }
    if ( arr2Dim[1][0] === val && arr2Dim[1][1] === val && arr2Dim[1][2] === 0 ) {
        div.push(1); div.push(2);
    }
    if ( arr2Dim[1][1] === val && arr2Dim[1][2] === val && arr2Dim[1][0] === 0 ) {
        div.push(1); div.push(0);
    }
    if ( arr2Dim[2][0] === val && arr2Dim[2][1] === val && arr2Dim[2][2] === 0 ) {
        div.push(2); div.push(2);
    }
    if ( arr2Dim[2][1] === val && arr2Dim[2][2] === val && arr2Dim[2][0] === 0 ) {
        div.push(2); div.push(0);
    }

    if ( arr2Dim[0][0] === val && arr2Dim[1][0] === val && arr2Dim[2][0] === 0 ) {
        div.push(2); div.push(0);
    }
    if ( arr2Dim[1][0] === val && arr2Dim[2][0] === val && arr2Dim[0][0] === 0 ) {
        div.push(0); div.push(0);
    }
    if ( arr2Dim[0][1] === val && arr2Dim[1][1] === val && arr2Dim[2][1] === 0 ) {
        div.push(2); div.push(1);
    }
    if ( arr2Dim[1][1] === val && arr2Dim[2][1] === val && arr2Dim[0][1] === 0 ) {
        div.push(0); div.push(1);
    }
    if ( arr2Dim[0][2] === val && arr2Dim[1][2] === val && arr2Dim[2][2] === 0 ) {
        div.push(2); div.push(2);
    }
    if ( arr2Dim[1][2] === val && arr2Dim[2][2] === val && arr2Dim[0][2] === 0 ) {
        div.push(0); div.push(2);
    }

    if ( arr2Dim[0][0] === val && arr2Dim[1][1] === val && arr2Dim[2][2] === 0 ) {
        div.push(2); div.push(2);
    }
    if ( arr2Dim[1][1] === val && arr2Dim[2][2] === val && arr2Dim[0][0] === 0 ) {
        div.push(0); div.push(0);
    }
    if ( arr2Dim[0][2] === val && arr2Dim[1][1] === val && arr2Dim[2][0] === 0 ) {
        div.push(2); div.push(0);
    }
    if ( arr2Dim[2][0] === val && arr2Dim[1][1] === val && arr2Dim[0][2] === 0 ) {
        div.push(0); div.push(2);
    }

    return div;
}


/**########################################################
***######    MAIN FUNCTION
***#######################################################*/
$(document).ready(function () {

    //Declaration and Initialization of variables
    var nbStepsPlayer = 0;
    var nbStepsComputer = 0;
    var gameArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    //###### init the game  ###############################
    //At the starting : Computer plays always the 1-1 cells
    gameArray[1][1] = 1;
    nbStepsComputer++;
    //Center cell in red at the startup
    $('#cell-1-1').css('background-color', generate_color(1));

    //log
    console.table(gameArray);
    console.log('nbStepsPlayer : ', nbStepsPlayer);
    console.log('nbStepsComputer : ', nbStepsComputer);

    /**######################################################
    *** FIRST LINE OF CELLS
    **#######################################################*/

    //click on the #cell-2-0
    $(document).on('click', '#cell-2-0', function() {
        event.stopPropagation();
        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][0] = 2;

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                var a = 0;
                var b = 0;
                if (nbStepsComputer < 2) {
                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if (i != 1 && j != 1 && gameArray[i][j] == 0) {
                                a = i;
                                b = j;
                                break;
                            }
                        }
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    var arr = getTheThirdFreeCell(gameArray, 1);
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;
                    console.table(gameArray);
                    //Check if there is any potential alignment of value
                    // if (checkAlignment3(gameArray, 1)) {
                    //     alert('GAME OVER : YOU ARE THE LOOSER');
                    // }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][0] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                // if (checkAlignment3(gameArray, 2)) {
                //     alert('GAME OVER : YOU ARE THE WINNER');
                // }
            }
        } else {
            alert('This cell is already busy. Play another cell!!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }
    });

    //click on the #cell-2-1
    $(document).on('click', '#cell-2-1', function() {

    });

    //click on the #cell-2-2
    $(document).on('click', '#cell-2-2', function() {

    });

    /**######################################################
    *** SECOND LINE OF CELLS
    **#######################################################*/

    //click on the #cell-1-0
    $(document).on('click', '#cell-1-0', function() {

    });

    //click on the #cell-1-1
    $(document).on('click', '#cell-1-1', function() {
        event.stopPropagation();
        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][0] = 2;

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                var a = 0;
                var b = 0;
                if (nbStepsComputer < 2) {
                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if (i != 1 && j != 1 && gameArray[i][j] == 0) {
                                a = i;
                                b = j;
                                break;
                            }
                        }
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    var arr = getTheThirdFreeCell(gameArray, 1);
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    // if (checkAlignment3(gameArray, 1)) {
                    //     alert('GAME OVER : YOU ARE THE LOOSER');
                    // }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][0] = 2;

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Check if there is any potential alignment of value
                // if (checkAlignment3(gameArray, 2)) {
                //     alert('GAME OVER : YOU ARE THE WINNER');
                // }
            }
        } else {
            alert('This cell is already busy. Play another cell!!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }
    });

    //click on the #cell-1-2
    $(document).on('click', '#cell-1-1', function() {

    });

    /**######################################################
    *** THIRD LINE OF CELLS
    **#######################################################*/

    //click on the #cell-0-0
    $(document).on('click', '#cell-0-0', function() {

    });

    //click on the #cell-0-1
    $(document).on('click', '#cell-0-1', function() {

    });

    //click on the #cell-0-2
    $(document).on('click', '#cell-0-2', function() {

    });

});
