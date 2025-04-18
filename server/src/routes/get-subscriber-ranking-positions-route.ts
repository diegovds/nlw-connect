import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberRankingPositions } from '../functions/get-subscriber-ranking-positions'

export const getSubscriberRankingPositionsRoute: FastifyPluginAsyncZod = async (
  app,
) => {
  app.get(
    '/subscribers/:subscriberId/ranking/position',
    {
      schema: {
        summary: 'Get subscriber ranking position',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({
            position: z.number().nullable(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      const { position } = await getSubscriberRankingPositions({
        subscriberId,
      })

      return reply.status(200).send({ position })
    },
  )
}
