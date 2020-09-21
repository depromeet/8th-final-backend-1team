import {Op} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Account} from '@src/model/entity/Account';

const logger = moduleLogger('AccountRepository');

export const getAccountOneByProviderId = async (providerId) => {
    return Account.findOne({
        where: {
            providerId: {[Op.eq]: providerId},
        },
        raw: true,
    });
};

export const saveAccount = async ({
    uuid,
    nickname,
    profileUrl,
    provider,
    providerId,
}) => {
    const account = await Account.create({
        uuid,
        nickname,
        profileUrl,
        provider,
        providerId,
    });
    return account.dataValues;
};
