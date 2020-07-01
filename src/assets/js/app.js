$(function(){

	$(document).ready(function(){
		if($('.nav-toggler').length > 0){
			$('.nav-toggler').on('click',function(e){
				e.preventDefault();
				$('body').toggleClass('sidebar-opened');
				$('body').find('.sidemenu').toggleClass('active');
				$('body').find('main').toggleClass('sidebar-activated');
			});
		}

		//Clone address field
		$('.clone-phone').on('click',function(e){
			e.preventDefault();
			var CurrAddrField=$(this).closest('.row').clone();
			CurrAddrField.appendTo($(this).closest('.clone-phone-field')).find('.clone-phone').toggleClass('clone-phone remove-phone').text('-');
		});
		$(document).on('click','.remove-phone',function(e){
			e.preventDefault();
			$(this).closest('.row').remove();
		});

	});
  
});