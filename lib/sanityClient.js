import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'edsinowe',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sklhqB0P8ZduM3Cd6abL4feVU4ttIzfoCLqwHOWgypBMFjI7BWKZDbfo5ADSTXKc1pnyTCsYHEusREg3cWF1trvpY48Z7Sz65ZPXjRNlT3FGDJVW7yQxaNHG2QAHxtFb7na858Rf07C32gM7lZja3gzn6DHGnJyQHnbqOSHdbZ5srsw2LUOm',
    usecdn: false,
})