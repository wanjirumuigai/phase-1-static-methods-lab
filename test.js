function titleize(string) {
    let conjunctions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string = string.toLowerCase()
    string = string.split(' ')
     
    console.log(string)
    for(let i=0;i<string.length;i++) {
        if(!conjunctions.includes(string[i])) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1)
      }
    
  }
  string = string.join(' ')
  string = string.charAt(0).toUpperCase() + string.slice(1)
  console.log(string)
  
}
titleize('Getting giggles')