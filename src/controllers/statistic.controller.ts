import { Context } from 'koa';
import { getRepository } from 'typeorm';
import { Statistic } from '../entities/statistic.entity';

interface RequestBody {
    listingViews: number;
    ownerPhoneViews: number;
}

export async function updateStatistics(ctx: Context) {
    const autoId = ctx.params.autoId;
    const { listingViews, ownerPhoneViews } = ctx.request.body as RequestBody;

    const statisticsRepository = getRepository(Statistic);
    let statistics = await statisticsRepository.findOne({ where: { autoId } });

    if (!statistics) {
        statistics = new Statistic();
        statistics.autoId = autoId;
        statistics.listingViews = 0;
        statistics.ownerPhoneViews = 0;
    }

    statistics.listingViews += listingViews;
    statistics.ownerPhoneViews += ownerPhoneViews;

    await statisticsRepository.save(statistics);
    ctx.status = 204; // No Content
}

export async function getStatistics(ctx: Context) {
    const autoId = ctx.params.autoId;
    const statisticsRepository = getRepository(Statistic);
    const statistics = await statisticsRepository.findOne({ where: { autoId } });
    ctx.body = statistics || { autoId, listingViews: 0, ownerPhoneViews: 0 };
}
