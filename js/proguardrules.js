$(function () {
    $(".select2").select2(
        {
            placeholder: "Search",
            minimumInputLength: 1
        }
    );
    $('#generate-button').click(function () {
        var libs = $('#search-box').val();
        if (libs) {
            $('#rules').empty();
            $('#rules-container').show();
            libs.forEach(function (element, index, array) {
                $.get("rules/" + element + ".txt", function (data) {
                    $('#rules').append(data.replace(/\n/g, "<br/>"));
                    $('#rules').append("<br/><br/>")
                    console.log(data);
                });
            });
        }
    })
});