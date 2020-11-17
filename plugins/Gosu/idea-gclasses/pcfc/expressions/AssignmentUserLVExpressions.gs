package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentUserLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentUserLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AssignmentUserLV.pcf: line 23, column 53
    function initialValue_0 () : gw.api.contact.DrivingDirectionsCache {
      return pageHelper.getDrivingDirectionsCache()
    }
    
    // 'value' attribute on UserCell (id=User_Cell) at AssignmentUserLV.pcf: line 60, column 36
    function sortValue_3 (gUser :  entity.GroupUser) : java.lang.Object {
      return gUser.User
    }
    
    // 'sortBy' attribute on GroupCell (id=Group_Cell) at AssignmentUserLV.pcf: line 65, column 32
    function sortValue_4 (gUser :  entity.GroupUser) : java.lang.Object {
      return gUser.Group.Name
    }
    
    // 'sortBy' attribute on GroupCell (id=ParentGroup_Cell) at AssignmentUserLV.pcf: line 70, column 39
    function sortValue_5 (gUser :  entity.GroupUser) : java.lang.Object {
      return gUser.Group.Parent.Name
    }
    
    // 'value' attribute on RowIterator at AssignmentUserLV.pcf: line 51, column 76
    function value_88 () : gw.api.database.IQueryBeanResult<entity.GroupUser> {
      return searchResults
    }
    
    // 'visible' attribute on TextCell (id=Group3_Cell) at AssignmentUserLV.pcf: line 35, column 45
    function visible_1 () : java.lang.Boolean {
      return perm.System.viewworkload
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at AssignmentUserLV.pcf: line 123, column 74
    function visible_12 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    // 'visible' attribute on EmptyCell (id=Group4_Cell) at AssignmentUserLV.pcf: line 40, column 55
    function visible_2 () : java.lang.Boolean {
      return searchCriteria.isProximitySearch()
    }
    
    // 'visible' attribute on BooleanRadioCell (id=ActivityCalendar_Cell) at AssignmentUserLV.pcf: line 80, column 45
    function visible_6 () : java.lang.Boolean {
      return perm.System.viewactcal
    }
    
    property get directions () : gw.api.contact.DrivingDirectionsCache {
      return getVariableValue("directions", 0) as gw.api.contact.DrivingDirectionsCache
    }
    
    property set directions ($arg :  gw.api.contact.DrivingDirectionsCache) {
      setVariableValue("directions", 0, $arg)
    }
    
    property get pageHelper () : gw.api.contact.ProximitySearchPageHelper {
      return getRequireValue("pageHelper", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set pageHelper ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setRequireValue("pageHelper", 0, $arg)
    }
    
    property get searchCriteria () : ContactSearchCriteria {
      return getRequireValue("searchCriteria", 0) as ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  ContactSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<GroupUser> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<GroupUser>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<GroupUser>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/assignment/AssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssignmentUserLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 9, column 49
    function action_15 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 12, column 49
    function action_17 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_27 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_29 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_39 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_41 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on BooleanRadioCell (id=ActivityCalendar_Cell) at AssignmentUserLV.pcf: line 80, column 45
    function action_51 () : void {
      UserAssignmentCalendarPopup.push(gUser.User)
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at AssignmentUserLV.pcf: line 138, column 74
    function action_83 () : void {
      AddressBookDirectionsPopup.push(directions.getCached(searchCriteria.ProximitySearchCenter, gUser.User.Contact.PrimaryAddress))
    }
    
    // 'action' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_16 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_18 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_28 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_30 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_40 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_42 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on BooleanRadioCell (id=ActivityCalendar_Cell) at AssignmentUserLV.pcf: line 80, column 45
    function action_dest_52 () : pcf.api.Destination {
      return pcf.UserAssignmentCalendarPopup.createDestination(gUser.User)
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at AssignmentUserLV.pcf: line 138, column 74
    function action_dest_84 () : pcf.api.Destination {
      return pcf.AddressBookDirectionsPopup.createDestination(directions.getCached(searchCriteria.ProximitySearchCenter, gUser.User.Contact.PrimaryAddress))
    }
    
    // 'pickValue' attribute on RowIterator at AssignmentUserLV.pcf: line 51, column 76
    function pickValue_87 () : gw.api.assignment.Assignee {
      return new gw.api.assignment.UserAssignee(gUser)
    }
    
    // 'valueRange' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_21 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_33 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function valueRoot_20 () : java.lang.Object {
      return gUser
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_44 () : java.lang.Object {
      return gUser.Group
    }
    
    // 'value' attribute on TextCell (id=ActivityCount_Cell) at AssignmentUserLV.pcf: line 87, column 47
    function valueRoot_55 () : java.lang.Object {
      return gUser.User
    }
    
    // 'value' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function value_19 () : entity.User {
      return gUser.User
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_31 () : entity.Group {
      return gUser.Group
    }
    
    // 'value' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function value_43 () : entity.Group {
      return gUser.Group.Parent
    }
    
    // 'value' attribute on TextCell (id=ActivityCount_Cell) at AssignmentUserLV.pcf: line 87, column 47
    function value_54 () : java.lang.Integer {
      return gUser.User.OpenActivityCount
    }
    
    // 'value' attribute on TextCell (id=ClaimCount_Cell) at AssignmentUserLV.pcf: line 94, column 47
    function value_58 () : java.lang.Integer {
      return gUser.User.OpenClaimCount
    }
    
    // 'value' attribute on TextCell (id=ExposureCount_Cell) at AssignmentUserLV.pcf: line 101, column 47
    function value_62 () : java.lang.Integer {
      return gUser.User.OpenExposureCount
    }
    
    // 'value' attribute on TextCell (id=MatterCount_Cell) at AssignmentUserLV.pcf: line 108, column 47
    function value_66 () : java.lang.Integer {
      return gUser.User.OpenMatterCount
    }
    
    // 'value' attribute on TextCell (id=GCDistance_Cell) at AssignmentUserLV.pcf: line 116, column 57
    function value_71 () : java.lang.String {
      return searchCriteria.ProximitySearchCenter == null ? "" : gUser.User.Contact.PrimaryAddress.getDistanceFromAsString(searchCriteria.ProximitySearchCenter)
    }
    
    // 'value' attribute on TextCell (id=DrivingDistance_Cell) at AssignmentUserLV.pcf: line 123, column 74
    function value_75 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, gUser.User.Contact.PrimaryAddress).getTotalDistanceString()
    }
    
    // 'value' attribute on TextCell (id=DrivingTime_Cell) at AssignmentUserLV.pcf: line 130, column 74
    function value_79 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, gUser.User.Contact.PrimaryAddress).getTotalTimeInMinutes()
    }
    
    // 'valueRange' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_22 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_34 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_34 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_46 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_23 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_35 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupCell (id=ParentGroup_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_47 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioCell (id=ActivityCalendar_Cell) at AssignmentUserLV.pcf: line 80, column 45
    function visible_53 () : java.lang.Boolean {
      return perm.System.viewactcal
    }
    
    // 'visible' attribute on TextCell (id=ActivityCount_Cell) at AssignmentUserLV.pcf: line 87, column 47
    function visible_56 () : java.lang.Boolean {
      return perm.System.viewworkload
    }
    
    // 'valueVisible' attribute on TextCell (id=GCDistance_Cell) at AssignmentUserLV.pcf: line 116, column 57
    function visible_70 () : java.lang.Boolean {
      return gUser.User.Contact.PrimaryAddress.hasLocationInformation()
    }
    
    // 'visible' attribute on TextCell (id=GCDistance_Cell) at AssignmentUserLV.pcf: line 116, column 57
    function visible_72 () : java.lang.Boolean {
      return searchCriteria.isProximitySearch()
    }
    
    // 'valueVisible' attribute on TextCell (id=DrivingDistance_Cell) at AssignmentUserLV.pcf: line 123, column 74
    function visible_74 () : java.lang.Boolean {
      return directions.haveCached(searchCriteria.ProximitySearchCenter, gUser.User.Contact.PrimaryAddress)
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at AssignmentUserLV.pcf: line 123, column 74
    function visible_76 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    property get gUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}