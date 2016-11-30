module.exports = {
 words: function(sentence){
  if(typeof(sentence) == typeof("")){

      arrayOfWords = sentence.replace(/\s\s+/g, " ").replace(/\t/g," ").replace(/\n/g," ").split(" ");
    var dictionary = {};
    var size = 0;
    for(var i =0; i < arrayOfWords.length;i++){
      
      size = Object.keys(dictionary).length;
      if(size >= 0){
        if(dictionary[arrayOfWords[i]] !== undefined){
          if(dictionary[arrayOfWords[i]] != " " ){
                  dictionary[arrayOfWords[i]] = dictionary[arrayOfWords[i]] + 1;
                  
            }
            
        }
        else{
              
                dictionary[arrayOfWords[i]] = 1;
              }
                
        }
          
      }
    
    return dictionary;
  }
  else{
    return "Parameter must be a string!";
  }
  }
}
  

