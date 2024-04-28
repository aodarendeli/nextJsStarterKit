import { getServerSession } from 'next-auth/next';
import { AuthOptions } from './GoogleProvider';

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(AuthOptions);

    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};