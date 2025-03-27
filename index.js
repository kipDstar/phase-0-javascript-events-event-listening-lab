/*function addingEventListener() {const input = document.getElementById('button');

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
    
    const clicker = document.getElementById('main');
    
    function clickMessage() {
        alert('I was touched');
    }
    
    clicker.addEventListener('click', clickMessage);
    
}*/
function addingEventListener() {

function clickAlert() {
  alert('I was clicked')
};

function clickMessage() {
  alert('I was touched');
};

document.getElementById('button').addEventListener('click', clickAlert);
document.querySelector('#main').addEventListener('click', clickMessage);
};
