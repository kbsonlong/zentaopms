$(function()
{
    toggleAcl($('input[name="acl"]:checked').val());
    $('input[name="type"]').change(function()
    {
        var type = $(this).val();
        if(type == 'text')
        {
            $('#contentBox').removeClass('hidden');
            $('#urlBox').addClass('hidden');
        }
        else if(type == 'url')
        {
            $('#contentBox').addClass('hidden');
            $('#urlBox').removeClass('hidden');
        }
    })
})

function loadDocModule(libID)
{
    link = createLink('doc', 'ajaxGetChild', 'libID=' + libID);
    $.post(link, function(data)
    {   
        $('#module').replaceWith(data);
        $('#module_chosen').remove();
        $('#module').chosen();
    })  
}
