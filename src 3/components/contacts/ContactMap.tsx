import { Box } from '@mantine/core';

export function ContactMap() {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.3670929267166!2d74.65651537659556!3d42.86510360303649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb133036e4b6d%3A0xc3b44e0569720f4b!2z0JrRi9GA0LPRi9C30YHQutC-LUdlcm1hbiBJbnN0aXR1dGUgb2YgQXBwbGllZCBJbmZvcm1hdGljcw!5e0!3m2!1sru!2skg!4v1713600000000!5m2!1sru!2skg";

    return (
        <Box className="w-full h-full min-h-[500px] rounded-[30px] overflow-hidden shadow-sm border border-gray-100">
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Box>
    );
}