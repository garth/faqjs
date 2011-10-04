(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['faqjs-template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"faqjs-search\"><input type=\"text\" placeholder=\"Search the FAQ\" ";
  stack1 = {};
  stack2 = "faq.searchText";
  stack1['value'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr
  tmp1 = {};
  tmp1.hash = stack1;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "></div>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <input type=\"checkbox\" class=\"faqjs-expand\" ";
  stack1 = {};
  stack2 = "content.expand";
  stack1['checked'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr
  tmp1 = {};
  tmp1.hash = stack1;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + ">\n    <h2>";
  stack1 = helpers.content || depth0.content
  stack1 = stack1.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "content.name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n    ";
  stack1 = helpers.content || depth0.content
  stack1 = stack1.expand;
  stack2 = helpers['if']
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      ";
  stack1 = {};
  stack2 = "content.questions";
  stack1['contentBinding'] = stack2;
  stack2 = "div";
  stack1['tagName'] = stack2;
  stack2 = "faqjs-questions";
  stack1['itemClass'] = stack2;
  stack2 = helpers.collection || depth0.collection
  tmp1 = self.program(5, program5, data);
  tmp1.hash = stack1;
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <input type=\"checkbox\" class=\"faqjs-expand\" ";
  stack1 = {};
  stack2 = "content.showAnswer";
  stack1['checked'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr
  tmp1 = {};
  tmp1.hash = stack1;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + ">\n        <div class=\"faqjs-question\">";
  stack1 = helpers.content || depth0.content
  stack1 = stack1.question;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "content.question", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        ";
  stack1 = helpers.content || depth0.content
  stack1 = stack1.showAnswer;
  stack2 = helpers['if']
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"faqjs-answer\">";
  stack1 = helpers.content || depth0.content
  stack1 = stack1.answer;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "content.answer", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n        ";
  return buffer;}

  buffer += "<div class=\"faqjs\">\n  ";
  stack1 = helpers.faq || depth0.faq
  stack1 = stack1.search;
  stack2 = helpers['if']
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = {};
  stack2 = "faq.categories";
  stack1['contentBinding'] = stack2;
  stack2 = "div";
  stack1['tagName'] = stack2;
  stack2 = "faqjs-category";
  stack1['itemClass'] = stack2;
  stack2 = helpers.collection || depth0.collection
  tmp1 = self.program(3, program3, data);
  tmp1.hash = stack1;
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;});
})()