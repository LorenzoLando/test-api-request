$.ajax({
    url: 'https://randomuser.me/api/?format=xml',
    dataType: 'xml',
    success: function(data) {
      console.log(data);
    }
  });
        