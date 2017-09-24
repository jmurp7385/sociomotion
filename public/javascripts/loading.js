document.getElementById('search_button').addEventListener('click', () => {
  document.getElementById('loading').classList.remove('hide').add('show');
});

window.onbeforeunload = function(){
  document.getElementById('loading').style.display = 'none'
};

