/**
 * @swagger
 * components:
 *   schemas:
 *     Line:
 *       type: object
 *       properties:
 *          line_id:
 *            type: string
 *          hn:
 *            type: string    
 */

 module.exports = function buildLine(){
    return function makeLine({
        line_id,
        hn,
    } = {}) {
        
        return Object.freeze({
            getLineID : () => line_id || null,
            getHN : () => hn || null,           
        })
    }
}