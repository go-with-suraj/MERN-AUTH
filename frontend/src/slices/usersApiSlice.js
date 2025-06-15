import { apiSlice } from "./apiSlice";

const Users_Url = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${Users_Url}/auth`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${Users_Url}`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${Users_Url}/logout`,
                method: 'POST'
            })
        }),

        updateUser: builder.mutation({
            query: (data) => ({
                url: `${Users_Url}/profile`,
                method: 'PUT',
                body: data
            })
        }),
    })
})
export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation} = usersApiSlice