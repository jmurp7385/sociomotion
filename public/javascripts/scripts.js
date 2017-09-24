// $(document).ready(function(){
  console.log('script');
  console.log(document.getElementById('emotional'));
  document.getElementById('emotional').addEventListener('click', () => {
    document.getElementById('emotional-graph').classList.remove('hide');
    document.getElementById('lang-graph').classList.add('hide');
    document.getElementById('social-graph').classList.add('hide');

    document.getElementById('emotional').classList.add('selected');
    document.getElementById('language').classList.remove('selected');
    document.getElementById('social').classList.remove('selected');
  });
  document.getElementById('language').addEventListener('click', () => {
    console.log('language');
    document.getElementById('emotional-graph').classList.add('hide');
    document.getElementById('lang-graph').classList.remove('hide');
    document.getElementById('social-graph').classList.add('hide');

    document.getElementById('emotional').classList.remove('selected');
    document.getElementById('language').classList.add('selected');
    document.getElementById('social').classList.remove('selected');
  });
  document.getElementById('social').addEventListener('click', () => {
    console.log('social');
    document.getElementById('emotional-graph').classList.add('hide');
    document.getElementById('lang-graph').classList.add('hide');
    document.getElementById('social-graph').classList.remove('hide');

    document.getElementById('emotional').classList.remove('selected');
    document.getElementById('language').classList.remove('selected');
    document.getElementById('social').classList.add('selected');
  });

  // $('#emotional').onclick(() => {
  //   $('.emotional-graph').removeClass('hide');
  //   $('.lang-graph').addClass('hide');
  //   $('.social-graph').addClass('hide');
  // });
  
  // $('#language').onclick(() => {
  //   $('#emotional-graph').addClass('hide');
  //   $('#lang-graph').removeClass('hide');
  //   $('#social-graph').addClass('hide');
  // });
  
  // $('#social').onclick(() => {
  //   $('#emotional-graph').addClass('hide');
  //   $('#lang-graph').addClass('hide');
  //   $('#social-graph').removeClass('hide');
  // });
// });

