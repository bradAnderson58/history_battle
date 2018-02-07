
from rest_framework import permissions

# custom permission to only allow owners of an object to edit
class IsOwnerOrReadOnly(permissions.BasePermission):

    
    def has_object_permission(self, request, view, obj):
        # only return items the if this is the owner
        print("calling")
        return obj.owner == request.user