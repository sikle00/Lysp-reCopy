const OnCol = 'yellow';
const OffCol = 'lightgray';



function lightbulbClick(click){
    if (click.style.backgroundColor == OffCol) {
        click.style.backgroundColor = OnCol;
    } else {
        click.style.backgroundColor = OffCol;
    }
}