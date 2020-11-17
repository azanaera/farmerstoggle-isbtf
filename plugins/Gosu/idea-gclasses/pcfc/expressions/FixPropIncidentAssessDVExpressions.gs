package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/assessment/FixPropIncidentAssessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FixPropIncidentAssessDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/assessment/FixPropIncidentAssessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FixPropIncidentAssessDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 9, column 49
    function action_25 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 12, column 49
    function action_27 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function action_29 () : void {
      UserContactDetailPopup.push(FixedPropertyIncident.InternalUser)
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at FixPropIncidentAssessDV.pcf: line 68, column 34
    function action_37 () : void {
      UserContactDetailPopup.push(FixedPropertyIncident.InternalUser)
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 9, column 49
    function action_dest_26 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 12, column 49
    function action_dest_28 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(FixedPropertyIncident.InternalUser)
    }
    
    // 'action' attribute on UserInput (id=InternalUser_Name_Input) at FixPropIncidentAssessDV.pcf: line 68, column 34
    function action_dest_38 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(FixedPropertyIncident.InternalUser)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Approve) at FixPropIncidentAssessDV.pcf: line 147, column 106
    function checkedRowAction_70 (element :  entity.AssessmentItem, CheckedValue :  entity.AssessmentItem) : void {
      CheckedValue.approveAssessmentItem()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Deny) at FixPropIncidentAssessDV.pcf: line 152, column 103
    function checkedRowAction_71 (element :  entity.AssessmentItem, CheckedValue :  entity.AssessmentItem) : void {
      CheckedValue.denyAssessmentItem()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Associate) at FixPropIncidentAssessDV.pcf: line 168, column 108
    function checkedRowAction_78 (element :  entity.AssessmentItem, CheckedValue :  entity.AssessmentItem) : void {
      CheckedValue.associateAssessmentItem(selectedSource)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=ApproveContent) at FixPropIncidentAssessDV.pcf: line 187, column 113
    function checkedRowAction_83 (element :  entity.AssessmentContentItem, CheckedValue :  entity.AssessmentContentItem) : void {
      CheckedValue.approveAssessmentItem()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Deny) at FixPropIncidentAssessDV.pcf: line 192, column 110
    function checkedRowAction_84 (element :  entity.AssessmentContentItem, CheckedValue :  entity.AssessmentContentItem) : void {
      CheckedValue.denyAssessmentItem()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=AssociateContent) at FixPropIncidentAssessDV.pcf: line 207, column 105
    function checkedRowAction_91 (element :  entity.AssessmentContentItem, CheckedValue :  entity.AssessmentContentItem) : void {
      CheckedValue.associateAssessmentItem(contentSelectedSource)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 92, column 27
    function def_onEnter_50 (def :  pcf.FixPropAssessSourceLV) : void {
      def.onEnter(FixedPropertyIncident)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 137, column 58
    function def_onEnter_80 (def :  pcf.FixPropAssessItemLV) : void {
      def.onEnter(FixedPropertyIncident)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 179, column 65
    function def_onEnter_93 (def :  pcf.FixPropContentItemLV) : void {
      def.onEnter(FixedPropertyIncident)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 92, column 27
    function def_refreshVariables_51 (def :  pcf.FixPropAssessSourceLV) : void {
      def.refreshVariables(FixedPropertyIncident)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 137, column 58
    function def_refreshVariables_81 (def :  pcf.FixPropAssessItemLV) : void {
      def.refreshVariables(FixedPropertyIncident)
    }
    
    // 'def' attribute on ListViewInput at FixPropIncidentAssessDV.pcf: line 179, column 65
    function def_refreshVariables_94 (def :  pcf.FixPropContentItemLV) : void {
      def.refreshVariables(FixedPropertyIncident)
    }
    
    // 'value' attribute on DateInput (id=TargetCloseDate_Input) at FixPropIncidentAssessDV.pcf: line 47, column 66
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AssessmentTargetCloseDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at FixPropIncidentAssessDV.pcf: line 55, column 74
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AssessmentCloseDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=General_Comment_Input) at FixPropIncidentAssessDV.pcf: line 60, column 58
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AssessmentComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.InternalUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=General_Description_Input) at FixPropIncidentAssessDV.pcf: line 32, column 55
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AssessmentName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeLineItems_Input) at FixPropIncidentAssessDV.pcf: line 75, column 56
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.IncludeLineItems = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeContentsLineItems_Input) at FixPropIncidentAssessDV.pcf: line 82, column 63
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.IncludeContentLineItems = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at FixPropIncidentAssessDV.pcf: line 39, column 46
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AssessmentStatus = (__VALUE_TO_SET as typekey.AssessmentStatus)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      contentSelectedSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'valueRange' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function valueRange_34 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function valueRange_74 () : java.lang.Object {
      return FixedPropertyIncident.SourceLine
    }
    
    // 'value' attribute on TextInput (id=Display_Name_Input) at FixPropIncidentAssessDV.pcf: line 26, column 52
    function valueRoot_1 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on TextInput (id=Display_Name_Input) at FixPropIncidentAssessDV.pcf: line 26, column 52
    function value_0 () : java.lang.String {
      return FixedPropertyIncident.DisplayName
    }
    
    // 'value' attribute on DateInput (id=TargetCloseDate_Input) at FixPropIncidentAssessDV.pcf: line 47, column 66
    function value_11 () : java.util.Date {
      return FixedPropertyIncident.AssessmentTargetCloseDate
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at FixPropIncidentAssessDV.pcf: line 55, column 74
    function value_16 () : java.util.Date {
      return FixedPropertyIncident.AssessmentCloseDate
    }
    
    // 'value' attribute on TextInput (id=General_Comment_Input) at FixPropIncidentAssessDV.pcf: line 60, column 58
    function value_21 () : java.lang.String {
      return FixedPropertyIncident.AssessmentComment
    }
    
    // 'value' attribute on TextInput (id=General_Description_Input) at FixPropIncidentAssessDV.pcf: line 32, column 55
    function value_3 () : java.lang.String {
      return FixedPropertyIncident.AssessmentName
    }
    
    // 'value' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function value_31 () : entity.User {
      return FixedPropertyIncident.InternalUser
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeLineItems_Input) at FixPropIncidentAssessDV.pcf: line 75, column 56
    function value_42 () : java.lang.Boolean {
      return FixedPropertyIncident.IncludeLineItems
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeContentsLineItems_Input) at FixPropIncidentAssessDV.pcf: line 82, column 63
    function value_46 () : java.lang.Boolean {
      return FixedPropertyIncident.IncludeContentLineItems
    }
    
    // 'value' attribute on CurrencyInput (id=ApproveTotal_Input) at FixPropIncidentAssessDV.pcf: line 106, column 59
    function value_54 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.ApprovedTotal()
    }
    
    // 'value' attribute on CurrencyInput (id=ReviewTotal_Input) at FixPropIncidentAssessDV.pcf: line 112, column 59
    function value_58 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.ReviewTotal()
    }
    
    // 'value' attribute on CurrencyInput (id=ApproveContentTotal_Input) at FixPropIncidentAssessDV.pcf: line 121, column 66
    function value_63 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.ApprovedContentTotal()
    }
    
    // 'value' attribute on CurrencyInput (id=ReviewContentTotal_Input) at FixPropIncidentAssessDV.pcf: line 127, column 66
    function value_67 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.ReviewContentTotal()
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at FixPropIncidentAssessDV.pcf: line 39, column 46
    function value_7 () : typekey.AssessmentStatus {
      return FixedPropertyIncident.AssessmentStatus
    }
    
    // 'value' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function value_72 () : entity.AssessmentSource {
      return selectedSource
    }
    
    // 'value' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function value_85 () : entity.AssessmentSource {
      return contentSelectedSource
    }
    
    // 'valueRange' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_35 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_35 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function verifyValueRangeIsAllowedType_75 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function verifyValueRangeIsAllowedType_75 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function verifyValueRangeIsAllowedType_75 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function verifyValueRangeIsAllowedType_88 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function verifyValueRangeIsAllowedType_88 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function verifyValueRangeIsAllowedType_88 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=InternalUser_Name_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_36 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=SourceRange_Input) at FixPropIncidentAssessDV.pcf: line 162, column 50
    function verifyValueRange_76 () : void {
      var __valueRangeArg = FixedPropertyIncident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_75(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=ContentSourceRange_Input) at FixPropIncidentAssessDV.pcf: line 201, column 50
    function verifyValueRange_89 () : void {
      var __valueRangeArg = FixedPropertyIncident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_88(__valueRangeArg)
    }
    
    // 'visible' attribute on DateInput (id=CloseDate_Input) at FixPropIncidentAssessDV.pcf: line 55, column 74
    function visible_15 () : java.lang.Boolean {
      return  FixedPropertyIncident.AssessmentStatus == TC_CLOSED 
    }
    
    property get FixedPropertyIncident () : FixedPropertyIncident {
      return getRequireValue("FixedPropertyIncident", 0) as FixedPropertyIncident
    }
    
    property set FixedPropertyIncident ($arg :  FixedPropertyIncident) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    property get contentSelectedSource () : AssessmentSource {
      return getVariableValue("contentSelectedSource", 0) as AssessmentSource
    }
    
    property set contentSelectedSource ($arg :  AssessmentSource) {
      setVariableValue("contentSelectedSource", 0, $arg)
    }
    
    property get selectedSource () : AssessmentSource {
      return getVariableValue("selectedSource", 0) as AssessmentSource
    }
    
    property set selectedSource ($arg :  AssessmentSource) {
      setVariableValue("selectedSource", 0, $arg)
    }
    
    
  }
  
  
}