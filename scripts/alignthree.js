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
    return (   ((arr2Dim[0][0] === val && arr2Dim[0][1] === val && arr2Dim[0][2] === val))
            || ((arr2Dim[1][0] === val && arr2Dim[1][1] === val && arr2Dim[1][2] === val))
            || ((arr2Dim[2][0] === val && arr2Dim[2][1] === val && arr2Dim[2][2] === val))
            || ((arr2Dim[0][0] === val && arr2Dim[1][0] === val && arr2Dim[2][0] === val))
            || ((arr2Dim[0][1] === val && arr2Dim[1][1] === val && arr2Dim[2][1] === val))
            || ((arr2Dim[0][2] === val && arr2Dim[1][2] === val && arr2Dim[2][2] === val))
            || ((arr2Dim[0][0] === val && arr2Dim[1][1] === val && arr2Dim[2][2] === val))
            || ((arr2Dim[2][0] === val && arr2Dim[1][1] === val && arr2Dim[0][2] === val))
           );
}


function isChessBoardFull(arr2Dim) {
    var full = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr2Dim[i][j] === 0) {
                full = false;
                break;
            }
        }
    }
    return full;
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

function getTheThirdFreeCell(tab, arr2Dim, val) {
    if ( arr2Dim[0][0] === val && arr2Dim[0][1] === val && arr2Dim[0][2] === 0 ) {
        tab.push(0); tab.push(2);
    } else if ( arr2Dim[0][1] === val && arr2Dim[0][2] === val && arr2Dim[0][0] === 0 ) {
        tab.push(0); tab.push(0);
    } else if ( arr2Dim[1][0] === val && arr2Dim[1][1] === val && arr2Dim[1][2] === 0 ) {
        tab.push(1); tab.push(2);
    } else if ( arr2Dim[1][1] === val && arr2Dim[1][2] === val && arr2Dim[1][0] === 0 ) {
        tab.push(1); tab.push(0);
    } else if ( arr2Dim[2][0] === val && arr2Dim[2][1] === val && arr2Dim[2][2] === 0 ) {
        tab.push(2); tab.push(2);
    } else if ( arr2Dim[2][1] === val && arr2Dim[2][2] === val && arr2Dim[2][0] === 0 ) {
        tab.push(2); tab.push(0);
    } else if ( arr2Dim[0][0] === val && arr2Dim[1][0] === val && arr2Dim[2][0] === 0 ) {
        tab.push(2); tab.push(0);
    } else if ( arr2Dim[1][0] === val && arr2Dim[2][0] === val && arr2Dim[0][0] === 0 ) {
        tab.push(0); tab.push(0);
    } else if ( arr2Dim[0][1] === val && arr2Dim[1][1] === val && arr2Dim[2][1] === 0 ) {
        tab.push(2); tab.push(1);
    } else if ( arr2Dim[1][1] === val && arr2Dim[2][1] === val && arr2Dim[0][1] === 0 ) {
        tab.push(0); tab.push(1);
    } else if ( arr2Dim[0][2] === val && arr2Dim[1][2] === val && arr2Dim[2][2] === 0 ) {
        tab.push(2); tab.push(2);
    } else if ( arr2Dim[1][2] === val && arr2Dim[2][2] === val && arr2Dim[0][2] === 0 ) {
        tab.push(0); tab.push(2);
    } else if ( arr2Dim[0][0] === val && arr2Dim[1][1] === val && arr2Dim[2][2] === 0 ) {
        tab.push(2); tab.push(2);
    } else if ( arr2Dim[1][1] === val && arr2Dim[2][2] === val && arr2Dim[0][0] === 0 ) {
        tab.push(0); tab.push(0);
    } else if ( arr2Dim[0][2] === val && arr2Dim[1][1] === val && arr2Dim[2][0] === 0 ) {
        tab.push(2); tab.push(0);
    } else if ( arr2Dim[2][0] === val && arr2Dim[1][1] === val && arr2Dim[0][2] === 0 ) {
        tab.push(0); tab.push(2);
    } else if ( arr2Dim[0][0] === val && arr2Dim[0][2] === val && arr2Dim[0][1] === 0 ) {
        tab.push(0); tab.push(1);
    } else if ( arr2Dim[1][0] === val && arr2Dim[1][2] === val && arr2Dim[1][1] === 0 ) {
        tab.push(1); tab.push(1);
    } else if ( arr2Dim[2][0] === val && arr2Dim[2][2] === val && arr2Dim[2][1] === 0 ) {
        tab.push(2); tab.push(1);
    } else if ( arr2Dim[0][0] === val && arr2Dim[2][0] === val && arr2Dim[1][0] === 0 ) {
        tab.push(1); tab.push(0);
    } else if ( arr2Dim[0][1] === val && arr2Dim[2][1] === val && arr2Dim[1][1] === 0 ) {
        tab.push(1); tab.push(1);
    } else if ( arr2Dim[0][2] === val && arr2Dim[2][2] === val && arr2Dim[1][2] === 0 ) {
        tab.push(1); tab.push(2);
    } else if ( arr2Dim[0][0] === val && arr2Dim[2][2] === val && arr2Dim[1][1] === 0 ) {
        tab.push(1); tab.push(1);
    } else if ( arr2Dim[2][0] === val && arr2Dim[0][2] === val && arr2Dim[1][1] === 0 ) {
        tab.push(1); tab.push(1);
    }
}




/**########################################################
***######    MAIN FUNCTION
***#######################################################*/
$(document).ready(function () {

    //Declaration and Initialization of variables
    var arr = [];
    var nbStepsPlayer = 0;
    var nbStepsComputer = 0;
    var gameArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    //###### init the game  ###############################
    //At the starting : Computer plays a random cells
    var a = Math.floor((Math.random() * 3));
    var b = Math.floor((Math.random() * 3));
    gameArray[a][b] = 1;
    nbStepsComputer++;
    //Make the cell in red at the startup
    $('#' + getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));

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
                gameArray[0][0] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][0] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-2-1
    $(document).on('click', '#cell-2-1', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][1] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][1] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-2-2
    $(document).on('click', '#cell-2-2', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][2] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[0][2] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    /**######################################################
    *** SECOND LINE OF CELLS
    **#######################################################*/

    //click on the #cell-1-0
    $(document).on('click', '#cell-1-0', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][0] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][0] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-1-1
    $(document).on('click', '#cell-1-1', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][1] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][1] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-1-2
    $(document).on('click', '#cell-1-1', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][2] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[1][2] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    /**######################################################
    *** THIRD LINE OF CELLS
    **#######################################################*/

    //click on the #cell-0-0
    $(document).on('click', '#cell-0-0', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][0] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][0] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-0-1
    $(document).on('click', '#cell-0-1', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][1] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][1] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

    //click on the #cell-0-2
    $(document).on('click', '#cell-0-2', function() {
        event.stopPropagation();

        var x = hexc($(this).css('background-color'));
        if (x.localeCompare('#00ffff') === 0) {
            if (nbStepsPlayer < 2) {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][2] = 2; //0-0 in memory is equivalent to 2-0 in the GUI

                console.table(gameArray);
                console.log('nbStepsPlayer : ', nbStepsPlayer);
                console.log('nbStepsComputer : ', nbStepsComputer);
                //Computer should play after mthe player
                //playOfComputer();
                if (nbStepsComputer < 2) {
                    var a = Math.floor((Math.random() * 3));
                    var b = Math.floor((Math.random() * 3));
                    while (gameArray[a][b] !== 0) {
                        var a = Math.floor((Math.random() * 3));
                        var b = Math.floor((Math.random() * 3));
                    }
                    gameArray[a][b] = 1;
                    $('#'+getTheDivKnowingIandJ(a, b)).css('background-color', generate_color(1));
                    nbStepsComputer++;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                } else {
                    arr = [];
                    console.log('Initial value of the Array : ', arr.toString());
                    getTheThirdFreeCell(arr, gameArray, 1);
                    console.table('Array From getTheThirdFreeCell : ', arr.toString());
                    $('#'+getTheDivKnowingIandJ(arr[0], arr[1])).css('background-color', generate_color(1));
                    nbStepsComputer++;
                    gameArray[arr[0]][arr[1]] = 1;

                    console.table(gameArray);
                    console.log('nbStepsPlayer : ', nbStepsPlayer);
                    console.log('nbStepsComputer : ', nbStepsComputer);
                    //Check if there is any potential alignment of value
                    if (checkAlignment3(gameArray, 1)) {
                        alert('GAME OVER : YOU ARE THE LOOSER !!!');
                    }
                }

            } else {
                $(this).css('background-color', generate_color(2));
                nbStepsPlayer++;
                gameArray[2][2] = 2;
                console.table(gameArray);
                //Check if there is any potential alignment of value
                if (checkAlignment3(gameArray, 2)) {
                    alert('GAME OVER : YOU ARE THE WINNER !!!');
                }
            }
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('This cell is already busy. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        } else if (x.localeCompare('#ff0000') === 0) {
            alert('You have already played this cell. Play another cell please !!!');
            console.table(gameArray);
            console.log('nbStepsPlayer : ', nbStepsPlayer);
            console.log('nbStepsComputer : ', nbStepsComputer);
        }

        if (isChessBoardFull(gameArray)) {
            alert('GAME OVER : CHESSBOARD IS FULL, START A NEW GAME');
        }

    });

});
