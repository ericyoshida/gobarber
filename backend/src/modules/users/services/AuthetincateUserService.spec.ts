// import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import AuthenticateUserService from './AuthenticateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUser = new CreateUserService(fakeUsersRepository);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'Eric',
      email: 'eric@teste.com.br',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'eric@teste.com.br',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });
});
