
describe("Modal", function() {

  beforeEach(function() {
    modal = new Modal();
  });

  it("should be able to open a picture", function() {
    modal.open(modal);
    expect(modal.currentModal).toEqual(modal);

    //demonstrates use of custom matcher
    expect(modal).toBePlaying(song);
  });

 
});
