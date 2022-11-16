import Users from './Users.js';
import axios from 'axios';

jest.mock('axios')

describe('User class', () => {
    describe.skip('Without mocking', () => {
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

    describe('Mocking 😎', () => {
        it('Should return an array of users, being a user an object with props: id, name, username', async () => {
            const users = [{id: 1, name: 'foo', username: ''}];
            const dataSet = {data: users};
            axios.get.mockResolvedValue(dataSet);

            expect.assertions(2);
            try{
                const userList = await Users.all();
                expect(userList).toBeArray();
                expect(userList[0]).toMatchObject({id: 1, name: 'foo', username: ''});
            }catch(e){

            }
        });
    });
});