const enhancer = require('./enhancer.js');
// test away!
test ("runs our first test", ()=>{
    expect(1+1).toBe(2)
})

describe ("enchancer", ()=>{
    describe("repair()", ()=>{
        it("should set durability to 100", ()=>{
            expect(
                enhancer.repair({name:"Alexis Hill", durability: 90, enhancement: 16})
            ).toEqual({name:"Alexis Hill",durability: 100, enhancement: 16 })
        })
        it ("should stay at 100 if full", ()=>{
            expect(
                enhancer.repair({name:"Alexis Hill", durability: 90, enhancement: 16})
            ).toEqual({name:"Alexis Hill",durability: 100, enhancement: 16 })
        });
    });// passed









})