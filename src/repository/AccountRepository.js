import {Op} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Account} from '@src/model/entity/Account';
import {Provider} from '@src/model/entity/Provider';

const logger = moduleLogger('AccountRepository');

export const saveAccount = async ({
    nickname,
    profileImage,
}) => {
    const account = await Account.create({
        nickname,
        profileImage,
    });
    return account.dataValues;
};

export const findOneById = async (userId) => {
    return Account.findOne({
        include: [{
            model: Provider,
        }],
        where: {
            id: {[Op.eq]: userId},
        },
    });
};
