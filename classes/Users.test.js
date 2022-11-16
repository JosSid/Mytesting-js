import Users from './Users.js';

describe('User class', () => {
    describe('Without mocking', () => {
        it('Should return 10 users', async () => {
            expect.assertions(1);
            try{
                const userList = await Users.all();
                expect(userList).toHaveLength(10)
            }catch(e){
                console.log(e)
            }
        });

        it('Should have users[0].username === Bret', async () => {
            expect.assertions(1);
            try{
                const userList = await Users.all();
                expect(userList[0]).toMatchObject({userName: 'Bret'})
            }catch(e){
                console.log(e)
            }
        })
    });
});