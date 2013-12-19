describe("Chrome fixtures", function() {
  it("should work with inline fixture", function() {
    $('body').append('<div id="test"><div id="test1">test fixture 1</div><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>');
    $('#test1').remove()
    expect($('<div id="test"><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')).toBe('#test')
  })

  it("should work with inline html with jasmine-jquery", function() {
    setFixtures('<div id="test"><div id="test1">test fixture 1</div><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')
    $('#test1').remove()
    expect($('<div id="test"><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')).toBe('#test')
  })


  it("should work with css selector with jasmine-fixture", function() {
    affix('div#test div#test1')
    $("#test1").remove()
    expect($('<div id="test"></div>')).toBe('#test')
  })

  afterEach(function() {
    $("#test").remove()
  })
})