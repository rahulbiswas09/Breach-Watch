
const rateLimitMap = new Map();

export function checkRateLimit(ip: string) {
    const now = Date.now();
    const windowSize = 60 * 1000; 
    const limit = 10; 

    const record = rateLimitMap.get(ip) || { count: 0, startTime: now };


    if (now - record.startTime > windowSize) {
        rateLimitMap.set(ip, { count: 1, startTime: now });
        return true;
    }


    if (record.count >= limit) {
        return false; 
    }


    record.count += 1;
    rateLimitMap.set(ip, record);
    return true;
}