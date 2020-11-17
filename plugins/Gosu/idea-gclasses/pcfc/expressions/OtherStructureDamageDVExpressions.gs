package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/exposures/OtherStructureDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OtherStructureDamageDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/exposures/OtherStructureDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OtherStructureDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_NewIncidentMenuItem) at OtherStructureDamageDV.pcf: line 32, column 111
    function action_4 () : void {
      NewOtherStructureIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_EditIncidentMenuItem) at OtherStructureDamageDV.pcf: line 37, column 112
    function action_6 () : void {
      EditOtherStructureIncidentPopup.push(Exposure.OtherStructureIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_ViewIncidentMenuItem) at OtherStructureDamageDV.pcf: line 42, column 112
    function action_8 () : void {
      EditOtherStructureIncidentPopup.push(Exposure.OtherStructureIncident, false)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_NewIncidentMenuItem) at OtherStructureDamageDV.pcf: line 32, column 111
    function action_dest_5 () : pcf.api.Destination {
      return pcf.NewOtherStructureIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_EditIncidentMenuItem) at OtherStructureDamageDV.pcf: line 37, column 112
    function action_dest_7 () : pcf.api.Destination {
      return pcf.EditOtherStructureIncidentPopup.createDestination(Exposure.OtherStructureIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=OtherStructureDamageDV_ViewIncidentMenuItem) at OtherStructureDamageDV.pcf: line 42, column 112
    function action_dest_9 () : pcf.api.Destination {
      return pcf.EditOtherStructureIncidentPopup.createDestination(Exposure.OtherStructureIncident, false)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 12, column 56
    function def_onEnter_0 (def :  pcf.ExposureDetailInputSet) : void {
      def.onEnter(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 46, column 59
    function def_onEnter_17 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 48, column 49
    function def_onEnter_19 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 14, column 51
    function def_onEnter_2 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 52, column 58
    function def_onEnter_21 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 12, column 56
    function def_refreshVariables_1 (def :  pcf.ExposureDetailInputSet) : void {
      def.refreshVariables(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 46, column 59
    function def_refreshVariables_18 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 48, column 49
    function def_refreshVariables_20 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 52, column 58
    function def_refreshVariables_22 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at OtherStructureDamageDV.pcf: line 14, column 51
    function def_refreshVariables_3 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherStructureIncident = (__VALUE_TO_SET as entity.OtherStructureIncident)
    }
    
    // 'valueRange' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.OtherStructureIncidentsOnly
    }
    
    // 'value' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function valueRoot_12 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function value_10 () : entity.OtherStructureIncident {
      return Exposure.OtherStructureIncident
    }
    
    // 'valueRange' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.OtherStructureIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.OtherStructureIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Other_Structure_Incident_Input) at OtherStructureDamageDV.pcf: line 27, column 51
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.OtherStructureIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
        
    
    
  }
  
  
}