import {Provider} from '@src/model/entity/Provider';
import {Account} from '@src/model/entity/Account';
import {Op} from 'sequelize';

export const findProviderOneById = async (providerId) => {
    return Provider.findOne({
        include: [{
            model: Account,
            as: 'account',
        }],
        where: {
            providerId: {[Op.eq]: providerId},
        },
        raw: true,
    });
};

export const saveProvider = async ({
    providerId,
    providerName,
    accountId,
}) => {
    const provider = await Provider.create({
        providerId,
        providerName,
        accountId,
    });
    return provider.dataValues;
};
