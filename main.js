$(document).ready(initialize);

function initialize(){

  $('#add').click(function(){

    var numbers = $('#numbers').val();
    console.log(numbers);
    var nums = numbers.split(/[\s,-]/).map(Number);
    console.log(nums);

    var sum = 0;
    for(var i = 0; i < nums.length; i++){
      sum = sum + nums[i];
      console.log(sum);

    $('#answer').val(sum);
    }

  })



}
