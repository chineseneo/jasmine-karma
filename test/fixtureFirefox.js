describe("Firefox fixtures", function() {
  it("should work with inline html", function() {
    $('body').append('<div id="test"><div id="test1">test fixture 1</div><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>');
    $('#test1').remove()
    expect($('<div id="test"><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')).toBe('#test')
  })

  it("should work with inline html with jasmine-jquery", function() {
    setFixtures('<div id="test"><div id="test1">test fixture 1</div><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')
    $('#test1').remove()
    expect($('<div id="test"><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')).toBe('#test')
  })

  it("should work with imported html with jasmine-jquery", function() {
    var path = '';
    if (typeof window.__karma__ !== 'undefined') {
      path += 'base/test/'
    } 
    jasmine.getFixtures().fixturesPath = path + 'fixtures';
    loadFixtures('test_fixtures.html');
    $("#test1").remove()
    expect($('<div id="test"><div id="test2">test fixture 2</div><div id="test3">test fixture 3</div></div>')).toBe("#test")
  })

  it("should work with css selector with jasmine-fixture", function() {
    affix('#test #test1+#test2+#test3')
    $("#test1").remove()
    expect($('<div id="test"></div>')).toBe('#test')
  })

  afterEach(function() {
    $("#test").remove()
  })
})