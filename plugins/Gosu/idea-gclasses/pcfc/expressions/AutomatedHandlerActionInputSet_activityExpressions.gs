package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.pcf.specialhandling.EmailTemplateUtil
@javax.annotation.processing.Generated("config/web/pcf/admin/specialhandling/AutomatedHandlerActionInputSet.activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AutomatedHandlerActionInputSet_activityExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/specialhandling/AutomatedHandlerActionInputSet.activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AutomatedHandlerActionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function action_13 () : void {
      PickEmailTemplatePopup.push(getEmailTemplateSearchCriteria())
    }
    
    // 'pickLocation' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function action_dest_14 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(getEmailTemplateSearchCriteria())
    }
    
    // 'conversionExpression' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function conversionExpression_15 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.getFilename()
    }
    
    // 'value' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedActivityHandler.EmailTemplateOverride = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedActivityHandler.ActivityPattern = (__VALUE_TO_SET as entity.ActivityPattern)
    }
    
    // 'initialValue' attribute on Variable at AutomatedHandlerActionInputSet.activity.pcf: line 14, column 40
    function initialValue_0 () : AutomatedActivityHandler {
      return automatedHandler as AutomatedActivityHandler
    }
    
    // 'optionLabel' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function optionLabel_4 (VALUE :  entity.ActivityPattern) : java.lang.String {
      return VALUE.Subject
    }
    
    // 'outputConversion' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function outputConversion_16 (VALUE :  java.lang.String) : java.lang.String {
      return gw.pcf.specialhandling.EmailTemplateUtil.getEmailTemplateDisplayName(VALUE)
    }
    
    // 'outputConversion' attribute on TextInput (id=AutomatedHandlerDefaultEmailTemplate_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 31, column 71
    function outputConversion_9 (VALUE :  java.lang.String) : java.lang.String {
      return getDefaultEmailTemplateDisplayName(VALUE, automatedActivityHandler.ActivityPattern != null)
    }
    
    // 'valueRange' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function valueRange_5 () : java.lang.Object {
      return getAvailableActivityPatterns()
    }
    
    // 'value' attribute on TextInput (id=AutomatedHandlerDefaultEmailTemplate_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 31, column 71
    function valueRoot_11 () : java.lang.Object {
      return automatedActivityHandler.ActivityPattern
    }
    
    // 'value' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function valueRoot_3 () : java.lang.Object {
      return automatedActivityHandler
    }
    
    // 'value' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function value_1 () : entity.ActivityPattern {
      return automatedActivityHandler.ActivityPattern
    }
    
    // 'value' attribute on TextInput (id=AutomatedHandlerDefaultEmailTemplate_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 31, column 71
    function value_10 () : java.lang.String {
      return automatedActivityHandler.ActivityPattern.EmailTemplate
    }
    
    // 'value' attribute on PickerInput (id=AutomatedHandlerEmailTemplateOverride_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 42, column 37
    function value_17 () : java.lang.String {
      return automatedActivityHandler.EmailTemplateOverride
    }
    
    // 'valueRange' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function verifyValueRangeIsAllowedType_6 ($$arg :  entity.ActivityPattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.database.IQueryBeanResult<entity.ActivityPattern>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AutomatedHandlerActivityPattern_Input) at AutomatedHandlerActionInputSet.activity.pcf: line 23, column 42
    function verifyValueRange_7 () : void {
      var __valueRangeArg = getAvailableActivityPatterns()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get automatedActivityHandler () : AutomatedActivityHandler {
      return getVariableValue("automatedActivityHandler", 0) as AutomatedActivityHandler
    }
    
    property set automatedActivityHandler ($arg :  AutomatedActivityHandler) {
      setVariableValue("automatedActivityHandler", 0, $arg)
    }
    
    property get automatedHandler () : AutomatedHandler {
      return getRequireValue("automatedHandler", 0) as AutomatedHandler
    }
    
    property set automatedHandler ($arg :  AutomatedHandler) {
      setRequireValue("automatedHandler", 0, $arg)
    }
    
    
    function getAvailableActivityPatterns() : java.util.List<ActivityPattern> {
      return ActivityPattern.finder.findByCategory(ActivityCategory.TC_HANDLINGINSTRUCTIONS).toList() as java.util.List<ActivityPattern>
    }
    
    function getDefaultEmailTemplateDisplayName(templateFilename : String, patternIsSelected : boolean) : String {
      if (patternIsSelected and (templateFilename == null or templateFilename.Empty)) {
        return DisplayKey.get("Web.Admin.AutomatedHandlerAction.Activity.NoDefaultEmailTemplate")
      } else {
        return EmailTemplateUtil.getEmailTemplateDisplayName(templateFilename)
      }
    }
    
    function getEmailTemplateSearchCriteria() : gw.api.email.EmailTemplateSearchCriteria {
      var criteria = new gw.api.email.EmailTemplateSearchCriteria()
      criteria.Keywords = "automatedactivityhandler, " + (typeof automatedHandler.Trigger).DisplayName
      return criteria
    }
    
    
  }
  
  
}