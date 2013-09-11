function configura_parcelas(s){
	
	if (s.val() == '') {
		
		$(".avista").hide();
		$(".parcelas").hide();
		
	}else{
		
		$(".avista").show();
		$(".parcelas").show();
		
		// Bandeira Discover aceita apenas pagamentos à vista
		if (s.val() == 'discover') {
			$(".parcelas").hide();
			$('.avista input').prop('checked', true);
		}
		
	}
}

$(function(){
	// Executa ao modificar a bandeira do cartão
	$("select.bandeiras").change(function(){	
		configura_parcelas($(this));	
	});
});