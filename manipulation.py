# def manipulate_data(dstr, set_data):
#     if (dstr == 'list'):
#         set_data.reverse()
#         return set_data
#
#     elif (dstr == 'set'):
#         set_data.update(['TIA', 'ANDELA'])
#         return set_data
#
#     elif (dstr == 'dictionary'):
#         arr = []
#         for key in set_data:
#             arr.append(key)
#         return arr

# def iterative_fact(n):
#     ans = 1
#     for i in range (1, n+1):
#         ans *=i
#     return ans
#
# print iterative_fact(0)
# print iterative_fact(5)

def fact(n):
    if n ==0:
        return 1
    elif n ==1:
        return 1
    else:
        return (n*fact(n-1))
# print fact(5)
# print fact(0)
