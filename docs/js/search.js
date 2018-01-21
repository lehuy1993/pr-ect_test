function checkform ( form )
{
  
  if (form.search.value == "") {
    alert( "Vui lòng nhập ký tự." );
    form.search.focus();
    return false ;
  }
  // ** END **
  return true ;
}