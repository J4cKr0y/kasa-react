// Generate a unique key each time the function is called
function GenUniKey() {
  return `${new Date().getTime()}-${Math.random().toString(36).substring(2, 15)}`;
}
        
export default GenUniKey;