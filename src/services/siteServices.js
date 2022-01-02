const { prisma } = require("../database.js");
require('dotenv').config();
const createError = require('http-errors');

const SiteServices = {
    async AddSite(data) {
        try {
            const responseData = await prisma.sites.create({
                data: data
            })
            return responseData
        } catch (error) {
            return createError(401, error)
        }
    },

    async updateSite(data) {
        try {
            const updatedSite = await prisma.sites.update({
                where: {
                    id: data.id
                },
                data: data
            })
            return updatedSite
        } catch (error) {
            return createError(401, error)
        }
    },
    async deleteSite(data) {
        try {
            const responseData = await prisma.sites.delete({
                where: {
                    id: data.id
                },
            })
            const sites = await prisma.sites.findMany()
            return sites
        } catch (error) {
            return createError(401, error)
        }
    }
}

module.exports = SiteServices